import { useState, useRef, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

import Loading from '@lib/components/Loading';
import clsx from 'clsx';

import Link from 'next/link';

const ReactQuill = dynamic(import('react-quill'), { ssr: false });

const modules = {
	toolbar: [
		['bold', 'italic', 'underline', 'strike'],
		['blockquote', 'code-block'],
		[{ header: 1 }, { header: 2 }],
		[{ list: 'ordered' }, { list: 'bullet' }],
		[{ script: 'sub' }, { script: 'super' }],
		[{ indent: '-1' }, { indent: '+1' }],
		[{ size: ['small', false, 'large', 'huge'] }],
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		[{ color: [] }, { background: [] }],
		[{ font: [] }],
		[{ align: [] }],
		['link', 'image'],
		['clean'],
	],
};

const formats = [
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'code-block',
	'header',
	'list',
	'indent',
	'script',
	'size',
	'color',
	'background',
	'font',
	'align',
	'link',
	'image',
];

function CreateNewsView() {
	return (
		<div className="mt-16">
			<h3 className="pt-8 pb-4 text-2xl font-bold">Tiêu đề Blog:</h3>
			<input
				className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
				type="text"
				// value={title}
				// placeholder="Nhập tiêu đề..."
				// onChange={(e) => setTitle(e.target.value)}
			/>
			<h3 className="pt-8 pb-4 text-2xl font-bold">Mô tả:</h3>
			<input
				className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
				type="text"
				// value={description}
				placeholder="Nhập mô tả..."
				// onChange={(e) => setDescription(e.target.value)}
			/>
			{/* <div className='mt-8 mb-4'>
        <h3 className='mb-2 text-2xl font-bold'>Slug:</h3>
        <div className='border border-black/20 bg-black/10 h-12 w-full px-2 text-lg flex items-center justify-between'>
            <span>{slug}</span>
            <button
                className='border border-black/20 bg-white px-4 py-1'
                onClick={() => {
                    navigator.clipboard.writeText(slug);
                }}
            >
                Copy
            </button>
        </div>
    </div> */}
			<h3 className="mt-8 pb-4 text-2xl font-bold">Nội dung Blog:</h3>
			<ReactQuill
				theme="snow"
				modules={modules}
				formats={formats}
				placeholder="Nhập văn bản..."
				// value={content}
				// onChange={setContent}
			/>
			{/* <div className='my-12'>
        <button
            className="bg-colorPrimary w-36 h-12 flex-center text-xl font-semibold text-white rounded-md hover:opacity-95 duration-100"
            onClick={() => {
                if (status === "idle") {
                    createBlog();
                    return;
                }
            }}
        >
            {status === "idle" && <span>Tạo Blog</span>}
            {status === "loading" &&
                <Loading
                    type="spinningBubbles"
                    height={24}
                    width={24}
                />
            }
            {status === "succeeded" &&
                <BsFillCheckCircleFill className='text-2xl' />
            }
            {status === "failed" &&
                <BsFillXCircleFill className='text-2xl' />
            }
        </button>
        <div className='text-xl font-medium mt-4'>
            <div className='mb-2'>Trạng thái: {status}</div>
            <div className='mb-2'>
                <span>Message: </span>
                {msg && <span
                    className={clsx(
                        status === "succeeded" && "text-colorGreen0",
                        status === "failed" && "text-colorRed0"
                    )}
                >{msg}</span>}
            </div>
            {status === "failed" &&
                <button
                    className='underline'
                    onClick={createBlog}
                >Thử lại</button>
            }
        </div>
        {(status === "succeeded" || status === "failed") && <div className='mt-6 flex'>
            <button
                className='text-xl font-medium w-56 h-12 bg-colorPrimary text-white rounded-md mr-2 hover:opacity-95 duration-100'
                onClick={resetState}
            >Tạo Blog mới</button>
            <Link href="/admin/blog">
                <button className='text-xl font-medium w-56 h-12 bg-colorGrey3 rounded-md hover:opacity-95 duration-100'>
                    Về trang quả lý blog
                </button>
            </Link>
        </div>}
    </div> */}
		</div>
	);
}

export default CreateNewsView;
