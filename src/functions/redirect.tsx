import React, { useEffect } from 'react';

const Redirect: React.FC<{ url: string }> = ({ url }) => {
	useEffect(() => {
		window.location.replace(url);
	}, [url]);

	return <div>Loading {url}...</div>;
};

export default Redirect;