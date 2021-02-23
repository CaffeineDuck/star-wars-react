import React from "react";
import { LayoutProps } from "../utils/Props";


const DefualtLayout: React.FC<LayoutProps> = ({children}) => {
	return (
		<div>
			{children}
		</div>
	);
};

export default DefualtLayout;
