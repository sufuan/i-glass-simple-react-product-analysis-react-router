import React from 'react';

const Blog = () => {
    return (
        <div className='  px-4'>
            <h1 className='text-2xl my-4'>what is context api? </h1>
            <p className='text-sm'>
                context api, reac এর এমন একটি ফিচার/ স্ট্রাকচার
                যা রিএক্ট অ্যাপে গ্লোবাল ভ্যারিয়েবল প্রডিউস করে যেটা যেকোনো জায়গা / কম্পোনেন্ট এ পাঠানো যায়

                সাধারণত রিএক্ট এ props দিয়ে ডাটা পাঠাতে গেলে গ্রান্ডপ্যারেন্ট থেকে প্যারেন্ট , প্যারেন্ট থেকে গ্রান্ডচিল্ড্রেন এ পাঠানো লাগে। যেটা খুব বিরক্তিকর। এটাকে props drilling ও বলে।
                context api, props drilling এর বিকল্প হিসাবে কাজ করে। যেহেতু গ্লোবাল ভ্যারিয়েবল হিসাবে কাজ করে তাই propos drilling না করে যেকোনো লেভেলে ডাটা পাঠানো যায়। এটি যেকোনো লেভেলে propos drilling সমস্যার সমাধান করে। also easier and lighter approach for state management
            </p>

            <h1 className='text-2xl my-4'>what is semantic tag?</h1>
            <p className='text-sm'>কিছু html ট্যাগের মিনিংফুল নাম থাকে যেগুলা দেখে বুঝা যায় তারা কোন কন্টেন্ট এবং কি কাজ করে। এগুলা কে সিমান্টিক ট্যাগ বলে। যেমন header, footer, article এগুলা ব্যাবহারের ফলে ব্রাউজার এর পাশাপাশি ডেভেলপার রাও বসহজে বুঝে কোনটা কি জিনিস আর কি কাজ করে</p>
        </div>
    );
};

export default Blog;