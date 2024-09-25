import React from "react";

import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<div>
			<div className={styles.realFooter}>
				<h6>
				{"Copyright © 2024 Hyeon Jeon"}
				</h6>
			</div>
		</div>
	)
}

export default Footer;