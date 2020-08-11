import React, { useState } from 'react';

import PrivacyFooter from './PrivacyFooter';
import PrivacyOption from 'PrivacyOption';

const App = () => {
	const [showFooter, setShowFooter] = useState(true);
	const [showOption, setShowOption] = useState(false);

	return (
		<div>
			{showFooter && (
				<PrivacyFooter
					onSave={() => {
						setShowFooter(false);
						setShowOption(false);
					}}
					onOption={() => {
						setShowFooter(false);
						setShowOption(true);
					}}
				/>
			)}
			{showOption && (
				<PrivacyOption
					onSave={() => {
						setShowFooter(false);
						setShowOption(false);
					}}
					onClose={() => {
						setShowFooter(true);
						setShowOption(false);
					}}
				/>
			)}
		</div>
	);
};

export default App;
