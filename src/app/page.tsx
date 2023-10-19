import { prisma } from '@/db';
import Link from 'next/link';
import { TaskItem } from '@/components/TaskItem';

function getTasks() {
  return prisma.task.findMany();
}

async function toggleTask(id: string, complete: boolean) {
  'use server';

  await prisma.task.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  console.log('Home function has been called'); // Debug Log

  try {
    console.log('About to fetch tasks'); // New Debug Log
    const tasks = await getTasks();
    // await prisma.task.create({ data: { title: 'test', complete: false } });
    console.log('Tasks fetched:', tasks); // Debug Log

    return (
      <>
        <header className='flex justify-between items-center mb-4'>
          <h1 className='text-2xl'>Learning Items</h1>
          <Link
            className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none'
            href='/new'
          >
            New
          </Link>
        </header>
        <ul className='pl-4'>
          {tasks.map(task => (
            <TaskItem key={task.id} {...task} toggleTask={toggleTask} />
          ))}
        </ul>
      </>
    );
  } catch (error) {
    console.log('Error:', error); // Debug Log
    return <div>Error occurred</div>;
  }
}
