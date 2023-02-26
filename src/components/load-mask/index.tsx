import React from 'react';
import { Spin, Space } from 'antd';
import './style.less';
export default function LoadMask () {
	return (
		<section className="load-mask">
			<Space size="middle">
				<Spin size="large" />
			</Space>
			<div className="mask-bg"></div>
		</section>
	);
}
