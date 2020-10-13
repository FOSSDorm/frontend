import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";

const Layout = props => {
	return (
		<div>
			<Header />
			{props.children}
			<Footer />
		</div>
	);
};
export default Layout;
