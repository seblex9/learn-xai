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

const defaultTasks = [
  {
    id: '1',
    title: 'LIME (Local Interpretable Model-agnostic Explanations)',
    complete: false,
  },
  { id: '2', title: 'Saliency Maps', complete: false },
  { id: '3', title: 'Quantile Regression', complete: false },
];

export default async function Home() {
  try {
    const tasks = [...defaultTasks, ...(await getTasks())];

    return (
      <div className='container mx-auto p-12 bg-black text-white'>
        <header className='flex justify-between items-center mb-12'>
          <div>
            <h1 className='text-3xl font-bold text-white'>Learn XAI</h1>
            <p className='text-base leading-6'>
              Your &quot;To-learn&quot; List for Explainable AI Concepts
            </p>
          </div>
          <Link
            className='border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-black focus-within:bg-green-600 focus-within:text-black outline-none'
            href='/new'
          >
            New
          </Link>
        </header>
        <div className='container mx-auto p-12 bg-black text-white'>
          {/* ... */}
          <div className='bg-gray-900 p-8 rounded-lg shadow-lg text-white'>
            <ul>
              {tasks.map(task => (
                <li className='py-2' key={task.id}>
                  {' '}
                  {/* Reduced padding here */}
                  <TaskItem {...task} toggleTask={toggleTask} />
                </li>
              ))}
            </ul>
          </div>
          {/* ... */}
        </div>

        <div className='bg-gray-900 p-8 rounded shadow mt-16 text-white'>
          <h3 className='text-2xl font-semibold mb-4'>
            What is XAI? Start here:
          </h3>
          <p className='mb-4'>
            <h4 className='font-semibold mb-4'>Articles:</h4>
            <ul className='list-disc list-inside'>
              <li>
                <a
                  href='https://medium.com/squaredev-publications/the-importance-of-explainable-ai-in-software-2-0-e5df4ff1de68'
                  className='text-green-600 underline ml-1'
                >
                  The importance of Explainable AI in Software 2.0
                </a>
                &nbsp;by Megaklis Vasilakis, founder of
                <a
                  href='https://squaredev.io/'
                  className='text-green-600 underline ml-1'
                >
                  SquareDev
                </a>
              </li>
              <li>
                <a
                  href='https://www.mdpi.com/2673-2688/4/3/34'
                  className='text-green-600 underline ml-1'
                >
                  Explainable Artificial Intelligence (XAI): Concepts and
                  Challenges in Healthcare
                </a>
                &nbsp;by Tim Hulsen
              </li>
              <li>
                <a
                  href='https://www.ericsson.com/en/reports-and-papers/white-papers/explainable-ai--how-humans-can-trust-ai'
                  className='text-green-600 underline ml-1'
                >
                  Explainable AI – how humans can trust AI
                </a>
                &nbsp;white paper
              </li>
            </ul>
          </p>
          <h4 className='font-semibold mb-4'>Videos:</h4>
          <iframe
            className='rounded shadow'
            width='560'
            height='315'
            src='https://www.youtube.com/embed/jFHPEQi55Ko'
            frameBorder='0'
            allowFullScreen
          ></iframe>
        </div>
      </div>
    );
  } catch (error) {
    console.log('Error:', error);
    return <div>Error occurred</div>;
  }
}
