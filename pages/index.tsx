
import Head from 'next/head';
import useSWR from 'swr';
import callAxios from '../utils/axios';
import axios from 'axios';
import { useEffect, useState } from 'react';
const fetcher = (url: string) => fetch(url).then((res)=>res.json())
export default function Home(props) {
  //fake data
  const dataEntry=[
    {
      "id": 1,
      "Order_Date": "01/02/14",
      "Quantity": "6"
    },
    {
      "id": 2,
      "Order_Date": "01/03/14",
      "Quantity": "2"
    },
    {
      "id": 3,
      "Order_Date": "01/03/14",
      "Quantity": "3"
    },
    {
      "id": 4,
      "Order_Date": "01/03/14",
      "Quantity": "6"
    },
    {
      "id": 5,
      "Order_Date": "01/03/14",
      "Quantity": "3"
    },
    {
      "id": 6,
      "Order_Date": "01/03/14",
      "Quantity": "5"
    },
    {
      "id": 7,
      "Order_Date": "01/03/14",
      "Quantity": "6"
    },
    {
      "id": 8,
      "Order_Date": "01/03/14",
      "Quantity": "6"
    },
    {
      "id": 9,
      "Order_Date": "01/03/14",
      "Quantity": "3"
    },
    {
      "id": 10,
      "Order_Date": "01/03/14",
      "Quantity": "3"
    },
    {
      "id": 11,
      "Order_Date": "01/03/14",
      "Quantity": "3"
    },
    {
      "id": 12,
      "Order_Date": "01/04/14",
      "Quantity": "2"
    },
    {
      "id": 13,
      "Order_Date": "01/04/14",
      "Quantity": "4"
    },
    {
      "id": 14,
      "Order_Date": "01/04/14",
      "Quantity": "4"
    },
    {
      "id": 15,
      "Order_Date": "01/04/14",
      "Quantity": "2"
    },
    {
      "id": 16,
      "Order_Date": "01/06/14",
      "Quantity": "7"
    },
    {
      "id": 17,
      "Order_Date": "01/06/14",
      "Quantity": "2"
    },
    {
      "id": 18,
      "Order_Date": "01/06/14",
      "Quantity": "6"
    },
    {
      "id": 19,
      "Order_Date": "01/06/14",
      "Quantity": "5"
    },
    {
      "id": 20,
      "Order_Date": "01/06/14",
      "Quantity": "4"
    },
    {
      "id": 21,
      "Order_Date": "01/06/14",
      "Quantity": "3"
    },
    {
      "id": 22,
      "Order_Date": "01/06/14",
      "Quantity": "6"
    },
    {
      "id": 23,
      "Order_Date": "01/06/14",
      "Quantity": "6"
    },
    {
      "id": 24,
      "Order_Date": "01/06/14",
      "Quantity": "7"
    },
    {
      "id": 25,
      "Order_Date": "01/06/14",
      "Quantity": "4"
    },
    {
      "id": 26,
      "Order_Date": "01/06/14",
      "Quantity": "5"
    },
    {
      "id": 27,
      "Order_Date": "01/07/14",
      "Quantity": "5"
    },
    {
      "id": 28,
      "Order_Date": "01/07/14",
      "Quantity": "2"
    },
    {
      "id": 29,
      "Order_Date": "01/07/14",
      "Quantity": "6"
    },
    {
      "id": 30,
      "Order_Date": "01/08/14",
      "Quantity": "3"
    },
    {
      "id": 31,
      "Order_Date": "01/08/14",
      "Quantity": "4"
    },
    {
      "id": 32,
      "Order_Date": "01/08/14",
      "Quantity": "1"
    },
    {
      "id": 33,
      "Order_Date": "01/08/14",
      "Quantity": "2"
    },
    {
      "id": 34,
      "Order_Date": "01/08/14",
      "Quantity": "3"
    },
    {
      "id": 35,
      "Order_Date": "01/08/14",
      "Quantity": "2"
    },
    {
      "id": 36,
      "Order_Date": "01/09/14",
      "Quantity": "3"
    },
    {
      "id": 37,
      "Order_Date": "01/09/14",
      "Quantity": "3"
    },
    {
      "id": 38,
      "Order_Date": "01/09/14",
      "Quantity": "6"
    },
    {
      "id": 39,
      "Order_Date": "01/09/14",
      "Quantity": "2"
    },
    {
      "id": 40,
      "Order_Date": "01/09/14",
      "Quantity": "3"
    },
    {
      "id": 41,
      "Order_Date": "01/10/14",
      "Quantity": "1"
    },
    {
      "id": 42,
      "Order_Date": "01/11/14",
      "Quantity": "3"
    },
    {
      "id": 43,
      "Order_Date": "01/11/14",
      "Quantity": "4"
    },
    {
      "id": 44,
      "Order_Date": "01/11/14",
      "Quantity": "5"
    },
    {
      "id": 45,
      "Order_Date": "01/11/14",
      "Quantity": "3"
    },
    {
      "id": 46,
      "Order_Date": "01/11/14",
      "Quantity": "5"
    },
    {
      "id": 47,
      "Order_Date": "01/11/14",
      "Quantity": "3"
    },
    {
      "id": 48,
      "Order_Date": "01/11/14",
      "Quantity": "12"
    },
    {
      "id": 49,
      "Order_Date": "01/11/14",
      "Quantity": "9"
    },
    {
      "id": 50,
      "Order_Date": "01/11/14",
      "Quantity": "3"
    },
    {
      "id": 51,
      "Order_Date": "01/11/14",
      "Quantity": "2"
    },
    {
      "id": 52,
      "Order_Date": "01/11/14",
      "Quantity": "3"
    },
    {
      "id": 53,
      "Order_Date": "01/11/14",
      "Quantity": "3"
    },
    {
      "id": 54,
      "Order_Date": "01/11/14",
      "Quantity": "5"
    },
    {
      "id": 55,
      "Order_Date": "01/11/14",
      "Quantity": "3"
    },
    {
      "id": 56,
      "Order_Date": "01/11/14",
      "Quantity": "3"
    },
    {
      "id": 57,
      "Order_Date": "01/11/14",
      "Quantity": "6"
    },
    {
      "id": 58,
      "Order_Date": "01/11/14",
      "Quantity": "2"
    },
    {
      "id": 59,
      "Order_Date": "01/11/14",
      "Quantity": "2"
    },
    {
      "id": 60,
      "Order_Date": "01/11/14",
      "Quantity": "2"
    },
    {
      "id": 61,
      "Order_Date": "01/11/14",
      "Quantity": "3"
    },
    {
      "id": 62,
      "Order_Date": "01/12/14",
      "Quantity": "8"
    },
    {
      "id": 63,
      "Order_Date": "01/12/14",
      "Quantity": "4"
    },
    {
      "id": 64,
      "Order_Date": "01/12/14",
      "Quantity": "3"
    },
    {
      "id": 65,
      "Order_Date": "01/12/14",
      "Quantity": "4"
    },
    {
      "id": 66,
      "Order_Date": "01/12/14",
      "Quantity": "2"
    },
    {
      "id": 67,
      "Order_Date": "01/12/14",
      "Quantity": "2"
    },
    {
      "id": 68,
      "Order_Date": "01/12/14",
      "Quantity": "7"
    },
    {
      "id": 69,
      "Order_Date": "01/12/14",
      "Quantity": "6"
    },
    {
      "id": 70,
      "Order_Date": "01/12/14",
      "Quantity": "3"
    },
    {
      "id": 71,
      "Order_Date": "01/12/14",
      "Quantity": "2"
    },
    {
      "id": 72,
      "Order_Date": "01/12/14",
      "Quantity": "3"
    },
    {
      "id": 73,
      "Order_Date": "01/12/14",
      "Quantity": "2"
    },
    {
      "id": 74,
      "Order_Date": "13/01/14",
      "Quantity": "2"
    },
    {
      "id": 75,
      "Order_Date": "13/01/14",
      "Quantity": "3"
    },
    {
      "id": 76,
      "Order_Date": "13/01/14",
      "Quantity": "6"
    },
    {
      "id": 77,
      "Order_Date": "13/01/14",
      "Quantity": "3"
    },
    {
      "id": 78,
      "Order_Date": "13/01/14",
      "Quantity": "6"
    },
    {
      "id": 79,
      "Order_Date": "13/01/14",
      "Quantity": "6"
    },
    {
      "id": 80,
      "Order_Date": "13/01/14",
      "Quantity": "5"
    },
    {
      "id": 81,
      "Order_Date": "13/01/14",
      "Quantity": "3"
    },
    {
      "id": 82,
      "Order_Date": "13/01/14",
      "Quantity": "5"
    },
    {
      "id": 83,
      "Order_Date": "13/01/14",
      "Quantity": "7"
    },
    {
      "id": 84,
      "Order_Date": "13/01/14",
      "Quantity": "2"
    },
    {
      "id": 85,
      "Order_Date": "14/01/14",
      "Quantity": "4"
    },
    {
      "id": 86,
      "Order_Date": "15/01/14",
      "Quantity": "5"
    },
    {
      "id": 87,
      "Order_Date": "16/01/14",
      "Quantity": "6"
    },
    {
      "id": 88,
      "Order_Date": "16/01/14",
      "Quantity": "3"
    },
    {
      "id": 89,
      "Order_Date": "16/01/14",
      "Quantity": "2"
    },
    {
      "id": 90,
      "Order_Date": "16/01/14",
      "Quantity": "3"
    },
    {
      "id": 91,
      "Order_Date": "18/01/14",
      "Quantity": "4"
    },
    {
      "id": 92,
      "Order_Date": "19/01/14",
      "Quantity": "10"
    },
    {
      "id": 93,
      "Order_Date": "19/01/14",
      "Quantity": "4"
    },
    {
      "id": 94,
      "Order_Date": "19/01/14",
      "Quantity": "5"
    },
    {
      "id": 95,
      "Order_Date": "19/01/14",
      "Quantity": "5"
    },
    {
      "id": 96,
      "Order_Date": "20/01/14",
      "Quantity": "7"
    },
    {
      "id": 97,
      "Order_Date": "20/01/14",
      "Quantity": "7"
    },
    {
      "id": 98,
      "Order_Date": "20/01/14",
      "Quantity": "4"
    },
    {
      "id": 99,
      "Order_Date": "20/01/14",
      "Quantity": "3"
    },
    {
      "id": 100,
      "Order_Date": "20/01/14",
      "Quantity": "3"
    }
  ]
  
  
  useState
  // console.log('passado como getserverside '+props)
  
  // const {data, error}=useSWR('https://jsonplaceholder.typicode.com/todos', fetcher, {
  useSWR('https://jsonplaceholder.typicode.com/todos', fetcher, {
    onSuccess:(data,key,config)=>{

      console.log(data)
    }
  })
  // console.log(data)
  try {
    data.map(corrent=>{console.log(corrent)})
  } catch (error) {
    console.log('erro ao ler o servidor')
  }
  // data2.map(corrent=>{console.log(corrent)})

  return (
    <main className='d-flex flex-column min-vh-100'>
      <Head>
        <title>Next.js + Bootstrap ❤️</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      

      <div className='px-4 py-5 my-5 text-center flex-grow-1'>
        <h1 className='display-5 fw-bold'>Next.js + Bootstrap 22❤️</h1>
        <div className='col-lg-6 mx-auto'>
          <p className='lead mb-4'>
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
            <button type='button' className='btn btn-primary btn-lg px-4 gap-3'>
              Primary button
            </button>
            <button
              type='button'
              className='btn btn-outline-secondary btn-lg px-4'
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
      
    </main>
  );
}

// export async function getServerSideProps() {
//   const server = process.env.NEST_PUBLIC_API
//   const data= await axios.get('https://jsonplaceholder.typicode.com/todos').then(resp => {
//   console.log(resp.data);
//   });
 
//   return {props: [data]}

// }


// import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// const Home: NextPage = () => {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to 1000302<a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.tsx</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }

// export default Home
