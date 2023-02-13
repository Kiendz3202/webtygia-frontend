import { useState, useRef, useEffect } from 'react';
import 'react-quill/dist/quill.snow.css';
import dynamic from 'next/dynamic';

import Link from 'next/link';
import MainLayout from '@components/layouts/mainLayout';
import axios from 'axios';

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

	const [description, setDescription] = useState();
	const [keyword, setKeyword] = useState();
	const [originSource, setOriginSource] = useState();
	const [quotation, setQuotation] = useState();
	const [category, setCategory] = useState();
	const [tag, setTag] = useState();
	const [nameAdminPost, setNameAdminPost] = useState();
	const [avatarAdminPost, setAvatarAdminPost] = useState();

	const [selectedFile, setSelectedFile] = useState();
	const [image, setImage] = useState();
	const [content, setContent] = useState('');

	const [status, setStatus] = useState('idle'); // idle, loading, succeeded, failed

	const selectedFileRef = useRef();

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

			// console.log(data);
			// const res = await AxiosRequest(session?.tokenAPI.token).post(API.ADMIN_BLOGS(), {
			//     "title": title.trim(),
			//     "content": content
			// });

			// setMsg('Tạo blog thành công!');
			axios({
				method: 'post',
				url: 'http://localhost:5000/api/v1/create-news',
				data: data,
				headers: { 'Content-Type': 'multipart/form-data' },
			})
				.then(function (response) {
					//handle success
					console.log(response);
				})
				.catch(function (response) {
					//handle error
					console.log(response);
				});
			setStatus('succeeded');
			setTitle('');
			setSelectedFile(null);
			selectedFileRef.current.value = '';
			setImage(null);
			setContent('');
			const delay = (m) => new Promise((r) => setTimeout(r, m));
			await delay(3000);
			setStatus('idle');
		} catch (err) {
			console.log(err);

			// setMsg(err.message);
			setStatus('failed');
		}
	};

	const handleImage = (e) => {
		const reader = new FileReader();
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
			reader.readAsDataURL(e.target.files[0]);
		}

		reader.onload = (readerEvent) => {
			setSelectedFile(readerEvent.target.result);
		};
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
					onChange={(e) => setTitle(e.target.value)}
				/>
				<h3 className="pt-8 pb-4 text-2xl font-bold">Ảnh bài viết:</h3>
				<input
					className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
					type="file"
					// value={image}
					ref={selectedFileRef}
					onChange={handleImage}
				/>
				<h3 className="pt-8 pb-4 text-2xl font-bold">Mô tả:</h3>
				<input
					className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
					type="text"
					value={description}
					placeholder="Nhập mô tả..."
					onChange={(e) => setDescription(e.target.value)}
				/>
				<h3 className="pt-8 pb-4 text-2xl font-bold">Keyword:</h3>
				<input
					className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
					type="text"
					value={keyword}
					placeholder="Nhập keyword để tìm user tìm kiếm bài viết..."
					onChange={(e) => setKeyword(e.target.value)}
				/>
				<h3 className="pt-8 pb-4 text-2xl font-bold">
					Link bài viết gốc(nếu có):
				</h3>
				<input
					className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
					type="text"
					value={title}
					placeholder="Nhập link bài viêt gốc..."
					onChange={(e) => setOriginSource(e.target.value)}
				/>
				<h3 className="pt-8 pb-4 text-2xl font-bold">
					Trích dẫn, tên nguồn, không phải link(nếu có):
				</h3>
				<input
					className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
					type="text"
					value={quotation}
					placeholder="Nhập tên nguồn..."
					onChange={(e) => setQuotation(e.target.value)}
				/>
				<h3 className="pt-8 pb-4 text-2xl font-bold">Thể loại:</h3>
				<input
					className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
					type="text"
					value={category}
					placeholder="Nhập thể loại..."
					onChange={(e) => setCategory(e.target.value)}
				/>
				<h3 className="pt-8 pb-4 text-2xl font-bold">Tag:</h3>
				<input
					className="border border-black/20 h-12 w-full px-2 text-lg outline-none"
					type="text"
					value={tag}
					placeholder="Nhập hastag... ví dụ: #giavangmoinhat"
					onChange={(e) => setTag(e.target.value)}
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
						<h1>{title}</h1>
						<div>
							<img src={selectedFile} />
						</div>
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
