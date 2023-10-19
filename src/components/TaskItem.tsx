'use client';

type TaskItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTask: (id: string, complete: boolean) => void;
};

export function TaskItem({ id, title, complete, toggleTask }: TaskItemProps) {
  return (
    <li className='flex gap1 items-center'>
      <input
        id={id}
        type='checkbox'
        className='cursor-pointer peer'
        defaultChecked={complete}
        onChange={e => toggleTask(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className='cursor-pointer peer-checked:line-through peer-checked:text-slate-500'
      >
        {title}
      </label>
    </li>
  );
}
