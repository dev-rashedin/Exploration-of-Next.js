import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className='text-center pt-20 flex flex-col items-center justify-center gap-8'>
      <h4> This is About page</h4>
      <Image
        src='https://i.ibb.co.com/Jr1tTHg/Next-js-Basic.jpg'
        width={500}
        height={300}
        alt='Next.js Image'
        className='rounded-lg'
      />
    </div>
  );
}
