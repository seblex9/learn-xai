type TaskItemProps = {
  id: string;
  title: string;
  complete: Boolean;
};

export function TaskItem({ id, title, complete }: TaskItemProps) {
  return (
    <li className='flex gap1 items-center'>
      <input id={id} type='checkbox' className='cursor-pointer peer' />
      <label htmlFor={id} className='peer-checked:line-through'>
        {title}
      </label>
    </li>
  );
}
