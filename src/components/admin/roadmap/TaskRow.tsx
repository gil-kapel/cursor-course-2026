'use client';

import { useState, useRef, useEffect } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { GripVertical, Trash2, ChevronDown, ChevronLeft, Plus, Calendar } from 'lucide-react';
import StatusBadge from './StatusBadge';
import PriorityBadge from './PriorityBadge';
import DateCell from './DateCell';
import OwnerCell from './OwnerCell';
import { GRID_COLS } from './TaskGroup';
import type { AdminTask, AdminTaskStatus, AdminTaskPriority } from '@/types/admin-roadmap';

interface AdminUser {
  email: string;
  name: string;
}

interface TaskRowProps {
  task: AdminTask;
  index: number;
  depth?: number;
  hasChildren?: boolean;
  isExpanded?: boolean;
  adminUsers?: AdminUser[];
  isMobile?: boolean;
  onToggleExpand?: () => void;
  onAddSubtask?: () => void;
  onTaskUpdate?: (taskId: string, updates: Record<string, unknown>) => Promise<void>;
  onTaskDelete?: (taskId: string) => Promise<void>;
}

export default function TaskRow({
  task,
  index,
  depth = 0,
  hasChildren,
  isExpanded,
  adminUsers = [],
  isMobile = false,
  onToggleExpand,
  onAddSubtask,
  onTaskUpdate,
  onTaskDelete,
}: TaskRowProps) {
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditingTitle && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditingTitle]);

  useEffect(() => {
    setEditedTitle(task.title);
  }, [task.title]);

  const handleTitleSave = async () => {
    const trimmed = editedTitle.trim();
    setIsEditingTitle(false);
    if (!trimmed || trimmed === task.title) {
      setEditedTitle(task.title);
      return;
    }
    await onTaskUpdate?.(task.id, { title: trimmed });
  };

  const handleTitleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleTitleSave();
    } else if (e.key === 'Escape') {
      setEditedTitle(task.title);
      setIsEditingTitle(false);
    }
  };

  const handleStatusChange = (status: AdminTaskStatus) => {
    onTaskUpdate?.(task.id, { status });
  };

  const handlePriorityChange = (priority: AdminTaskPriority) => {
    onTaskUpdate?.(task.id, { priority });
  };

  const handleStartDateChange = (date: Date | null) => {
    onTaskUpdate?.(task.id, { startDate: date ? date.toISOString() : null });
  };

  const handleEndDateChange = (date: Date | null) => {
    onTaskUpdate?.(task.id, { endDate: date ? date.toISOString() : null });
  };

  const handleOwnerChange = (ownerId: string | null) => {
    onTaskUpdate?.(task.id, { ownerId });
  };

  const isSubtask = depth > 0;

  // --- Mobile card layout ---
  const mobileCardContent = (dragProvided?: ReturnType<typeof Object>, snapshot?: { isDragging: boolean }) => (
    <div
      ref={dragProvided && 'innerRef' in dragProvided ? (dragProvided as Record<string, unknown>).innerRef as React.Ref<HTMLDivElement> : undefined}
      {...(dragProvided && 'draggableProps' in dragProvided ? (dragProvided as Record<string, unknown>).draggableProps as Record<string, unknown> : {})}
      className={`p-3 border-b border-[#F7F7F8] transition-colors duration-150 ${
        isSubtask ? 'ps-7 bg-[#FAFAFA]' : ''
      } ${snapshot?.isDragging ? 'bg-white shadow-lg rounded-xl z-50' : ''}`}
    >
      {/* Row 1: drag/expand + title + owner */}
      <div
        {...(dragProvided && 'dragHandleProps' in dragProvided ? (dragProvided as Record<string, unknown>).dragHandleProps as Record<string, unknown> : {})}
        className="flex items-center gap-2 mb-2"
      >
        {!isSubtask && (
          hasChildren ? (
            <button
              onClick={(e) => { e.stopPropagation(); onToggleExpand?.(); }}
              className="p-1.5 hover:bg-[#F7F7F8] rounded transition-colors shrink-0"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 text-[#7E7F90]" strokeWidth={2} />
              ) : (
                <ChevronLeft className="w-4 h-4 text-[#7E7F90]" strokeWidth={2} />
              )}
            </button>
          ) : (
            <GripVertical className="w-4 h-4 text-[#BDBDCB] shrink-0" strokeWidth={1.5} />
          )
        )}
        {isSubtask && <span className="text-[#BDBDCB] text-xs select-none shrink-0">&#x2514;</span>}

        {isEditingTitle ? (
          <input
            ref={inputRef}
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleTitleSave}
            onKeyDown={handleTitleKeyDown}
            className="flex-1 h-9 text-sm font-medium text-[#303150] bg-white border border-[#69ADFF] rounded-lg px-2 focus:outline-none focus:ring-2 focus:ring-[#69ADFF]/20 min-w-0"
          />
        ) : (
          <span
            onClick={() => setIsEditingTitle(true)}
            className="flex-1 text-sm font-medium text-[#303150] truncate cursor-text"
          >
            {task.title}
          </span>
        )}

        <OwnerCell
          ownerId={task.ownerId}
          adminUsers={adminUsers}
          isMobile={isMobile}
          onChange={onTaskUpdate ? handleOwnerChange : undefined}
        />
      </div>

      {/* Row 2: status + priority */}
      <div className="flex items-center gap-2 mb-2">
        <div className="flex-1">
          <StatusBadge status={task.status} isMobile={isMobile} onChange={onTaskUpdate ? handleStatusChange : undefined} />
        </div>
        <div className="flex-1">
          <PriorityBadge priority={task.priority} isMobile={isMobile} onChange={onTaskUpdate ? handlePriorityChange : undefined} />
        </div>
      </div>

      {/* Row 3: dates + actions */}
      <div className="flex items-center gap-2 text-xs text-[#7E7F90]">
        <div className="flex items-center gap-1.5 flex-1 min-w-0">
          <Calendar className="w-3.5 h-3.5 text-[#BDBDCB] shrink-0" strokeWidth={1.75} />
          <DateCell date={task.startDate} onChange={onTaskUpdate ? handleStartDateChange : undefined} />
          {(task.startDate || task.endDate) && <span className="text-[#BDBDCB]">—</span>}
          <DateCell date={task.endDate} onChange={onTaskUpdate ? handleEndDateChange : undefined} />
        </div>
        <div className="flex items-center gap-0.5 shrink-0">
          {!isSubtask && onAddSubtask && (
            <button
              onClick={onAddSubtask}
              className="p-2 rounded-lg hover:bg-[#69ADFF]/10 transition-all"
              title="הוסף תת-משימה"
            >
              <Plus className="w-4 h-4 text-[#BDBDCB]" strokeWidth={1.75} />
            </button>
          )}
          {onTaskDelete && (
            <button
              onClick={() => onTaskDelete(task.id)}
              className="p-2 rounded-lg hover:bg-red-50 transition-all"
              title="מחק משימה"
            >
              <Trash2 className="w-4 h-4 text-[#BDBDCB]" strokeWidth={1.75} />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // --- Desktop grid layout ---
  const rowContent = (dragProvided?: ReturnType<typeof Object>, snapshot?: { isDragging: boolean }) => (
    <div
      ref={dragProvided && 'innerRef' in dragProvided ? (dragProvided as Record<string, unknown>).innerRef as React.Ref<HTMLDivElement> : undefined}
      {...(dragProvided && 'draggableProps' in dragProvided ? (dragProvided as Record<string, unknown>).draggableProps as Record<string, unknown> : {})}
      className={`${GRID_COLS} items-center border-b border-[#F7F7F8] transition-colors duration-150 group relative ${
        snapshot?.isDragging
          ? 'bg-white shadow-lg rounded-lg z-50'
          : isSubtask
            ? 'bg-[#FAFAFA] hover:bg-[#F5F5F5]'
            : 'hover:bg-[#FAFAFA]'
      }`}
    >
      <div
        {...(dragProvided && 'dragHandleProps' in dragProvided ? (dragProvided as Record<string, unknown>).dragHandleProps as Record<string, unknown> : {})}
        className={`h-11 flex items-center justify-center ${isSubtask ? '' : 'cursor-grab active:cursor-grabbing'}`}
      >
        {isSubtask ? (
          <div className="w-4 h-4" />
        ) : hasChildren ? (
          <button
            onClick={(e) => { e.stopPropagation(); onToggleExpand?.(); }}
            className="p-0.5 hover:bg-[#F7F7F8] rounded transition-colors"
          >
            {isExpanded ? (
              <ChevronDown className="w-3.5 h-3.5 text-[#7E7F90]" strokeWidth={2} />
            ) : (
              <ChevronLeft className="w-3.5 h-3.5 text-[#7E7F90]" strokeWidth={2} />
            )}
          </button>
        ) : (
          <GripVertical className="w-4 h-4 text-[#BDBDCB] opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
        )}
      </div>

      <div className={`h-11 flex items-center pe-4 gap-2 min-w-0 ${isSubtask ? 'ps-8' : ''}`}>
        {isSubtask && <span className="text-[#BDBDCB] text-xs me-1 select-none">&#x2514;</span>}
        {isEditingTitle ? (
          <input
            ref={inputRef}
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            onBlur={handleTitleSave}
            onKeyDown={handleTitleKeyDown}
            className={`flex-1 h-8 font-medium text-[#303150] bg-white border border-[#69ADFF] rounded-lg px-2 focus:outline-none focus:ring-2 focus:ring-[#69ADFF]/20 min-w-0 ${isSubtask ? 'text-xs' : 'text-sm'}`}
          />
        ) : (
          <span
            onClick={() => setIsEditingTitle(true)}
            className={`font-medium text-[#303150] truncate cursor-text hover:text-[#69ADFF] transition-colors ${isSubtask ? 'text-xs' : 'text-sm'}`}
          >
            {task.title}
          </span>
        )}
      </div>

      <div className="h-11 flex items-center justify-center px-2">
        <OwnerCell ownerId={task.ownerId} adminUsers={adminUsers} onChange={onTaskUpdate ? handleOwnerChange : undefined} />
      </div>

      <div className="h-11 flex items-center px-1.5">
        <div className="w-full">
          <StatusBadge status={task.status} onChange={onTaskUpdate ? handleStatusChange : undefined} />
        </div>
      </div>

      <div className="h-11 flex items-center px-1.5">
        <div className="w-full">
          <DateCell date={task.startDate} onChange={onTaskUpdate ? handleStartDateChange : undefined} />
        </div>
      </div>

      <div className="h-11 flex items-center px-1.5">
        <div className="w-full">
          <DateCell date={task.endDate} onChange={onTaskUpdate ? handleEndDateChange : undefined} />
        </div>
      </div>

      <div className="h-11 flex items-center px-1.5">
        <div className="w-full">
          <PriorityBadge priority={task.priority} onChange={onTaskUpdate ? handlePriorityChange : undefined} />
        </div>
      </div>

      <div className="h-11 flex items-center justify-center gap-0.5">
        {!isSubtask && onAddSubtask && (
          <button
            onClick={onAddSubtask}
            className="p-1 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-[#69ADFF]/10 transition-all"
            title="הוסף תת-משימה"
          >
            <Plus className="w-3.5 h-3.5 text-[#BDBDCB] hover:text-[#69ADFF] transition-colors" strokeWidth={1.75} />
          </button>
        )}
        {onTaskDelete && (
          <button
            onClick={() => onTaskDelete(task.id)}
            className="p-1 rounded-lg opacity-0 group-hover:opacity-100 hover:bg-red-50 transition-all"
            title="מחק משימה"
          >
            <Trash2 className="w-3.5 h-3.5 text-[#BDBDCB] hover:text-red-500 transition-colors" strokeWidth={1.75} />
          </button>
        )}
      </div>
    </div>
  );

  const renderContent = isMobile ? mobileCardContent : rowContent;

  if (isSubtask) {
    return renderContent();
  }

  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => renderContent(provided, snapshot)}
    </Draggable>
  );
}
