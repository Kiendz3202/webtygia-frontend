import { useState, useRef, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

import Link from 'next/link';
import MainLayout from '@components/layouts/mainLayout';

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
	const [title, setTitle] = useState('');
	const [image, setImage] = useState('');
	const [content, setContent] = useState(
		'<p>Đơn giản vì tôi không thể phó mặc số phận của mình cho một tên robot không biết một chút gì về lĩnh vực mà tôi đang cần sự tư vấn cả.</p><h2><strong>“ChatGPT có thể làm được gì trong thị trường tiền mã hóa?”</strong></h2><p>Bắt đầu với câu hỏi đầu tiên, tôi thắc mắc: “Liệu ChatGPT có thể làm được gì trong thị trường này?”</p><p>Ngay lập tức, ChatGPT cho tôi câu trả lời:</p><ol><li>Công cụ có thể giải thích những khái niệm, thuật ngữ phức tạp.</li><li>Còn nhiều thứ nữa mà bạn có thể tận dụng được từ ChatGPT.</li><li>Biến những bài báo cáo, phân tích dài thành những đoạn văn ngắn gọn súc tích.</li><li>Trả lời những câu hỏi thường gặp trong thị trường tiền mã hóa như: cách mua bán, lưu trữ an toàn hoặc xu hướng thị trường hiện tại đang là gì,…&nbsp;</li></ol><p><br></p>'
	);

	const [status, setStatus] = useState('idle'); // idle, loading, succeeded, failed

	const createBlog = async () => {
		if (title.trim() === '' || content.trim() === '') {
			// toastRef.current.handleToastAction('error', "Không được bỏ trống!");

			//handle error
			return;
		}

		setStatus('loading');

		try {
			const timeUpdate = Math.floor(Date.now() / 1000);

			let data = new FormData();

			data.append('title', title);
			data.append('image', image);
			data.append('timeUpdate', timeUpdate);
			data.append('content', content);

			console.log(data);
			// const res = await AxiosRequest(session?.tokenAPI.token).post(API.ADMIN_BLOGS(), {
			//     "title": title.trim(),
			//     "content": content
			// });

			setMsg('Tạo blog thành công!');
			setStatus('succeeded');
		} catch (err) {
			console.log(err);

			setMsg(err.message);
			setStatus('failed');
		}
	};
	return (
		//image, title,timestamps
		<MainLayout>
			<div className="mt-16 max-w-[1440px] mx-auto">
				<h3 className="pt-8 pb-4 text-2xl font-bold">Tiêu đề Blog:</h3>
				<input
					className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
					type="text"
					value={title}
					placeholder="Nhập tiêu đề..."
					onChange={(e) => setTitle(e.target.files[0])}
				/>
				<h3 className="pt-8 pb-4 text-2xl font-bold">Tiêu đề Blog:</h3>
				<input
					className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
					type="file"
					value={image}
					onChange={(e) => setImage(e.target.value)}
				/>
				<h3 className="mt-8 pb-4 text-2xl font-bold">Nội dung Blog:</h3>
				<ReactQuill
					theme="snow"
					modules={modules}
					formats={formats}
					placeholder="Nhập văn bản..."
					value={content}
					onChange={setContent}
				/>
				<div className="my-12">
					<button
						className=" bg-blue-text w-36 h-12 flex-center text-xl font-semibold text-white rounded-md hover:opacity-95 duration-100"
						onClick={() => {
							if (status === 'idle') {
								createBlog();
								return;
							}
						}}
					>
						{/* idle, loading, succeeded, failed */}
						{status === 'idle' && <span>Tạo Blog</span>}
						{status === 'loading' && <span>Loading...</span>}
						{status === 'succeeded' && <span>Tạo thành công</span>}
						{status === 'failed' && <span>Tạo thất bại</span>}
					</button>
				</div>
				<div className="ql-snow text-[18px]">
					<div
						className="ql-editor link:"
						style={
							{
								// padding: 0,
								// lineHeight: '1.6rem',
								// fontWeight: '300',
							}
						}
					>
						<h1>
							Nhờ ChatGPT tạo danh mục đầu tư để thành triệu phú
							năm 2023
						</h1>
						<div
							dangerouslySetInnerHTML={{ __html: content }}
						></div>
					</div>
				</div>
			</div>
		</MainLayout>
	);
}

export default CreateNewsView;
