import { useEffect } from 'react';

const BlogPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return <div>BLOG PAGE</div>;
};

export default BlogPage;
