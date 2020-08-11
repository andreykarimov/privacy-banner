import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './PrivacyOption.module.scss';

const ListItem = ({ title, value, onValueChange, error, children }) => {
	const [showItem, setShowItem] = useState(false);
	return (
		<li className={styles.listItem}>
			<div
				className={styles.titleTabStyles}
				onClick={e => {
					e.stopPropagation();
					setShowItem(!showItem);
				}}
			>
				<div className={styles.cmpCollapsible}>
					<button
						type="button"
						aria-expanded="false"
						aria-controls="information-storage-and-access-panel"
						className={cx(styles.arrowButton, { [styles.show]: showItem })}
					>
						<span className={styles.visuallyHiddenStyles}>Show</span> {title}
					</button>
				</div>
				<div className={styles.radioContainerStyles}>
					<label
						className={styles.radioLabel}
						onClick={e => {
							e.stopPropagation();
							onValueChange(true);
						}}
					>
						<input
							type="radio"
							className={cx(styles.input, { [styles.itemError]: error && value === null })}
							checked={value !== null && value}
						/>
						<span className="css-59urc6">On</span>
					</label>
					<label
						className={styles.radioLabel}
						onClick={e => {
							e.stopPropagation();
							onValueChange(false);
						}}
					>
						<input
							type="radio"
							className={cx(styles.input, { [styles.itemError]: error && value === null })}
							checked={value !== null && !value}
						/>
						<span className="css-59urc6">Off</span>
					</label>
				</div>
			</div>
			<div id="information-storage-and-access-panel" className="css-1iuxhy3">
				{showItem && children}
			</div>
		</li>
	);
};

ListItem.propTypes = {
	title: PropTypes.string,
	value: PropTypes.bool,
	onValueChange: PropTypes.func,
	error: PropTypes.bool,
};

const PrivacyOption = ({ onSave, onClose }) => {
	const [showError, setShowError] = useState(false);
	const [storageAccessOn, setStorageAccessOn] = useState(null);
	const [personalizationOn, setPersonalizationOn] = useState(null);
	const [useOfInformationOn, setUseOfInformationOn] = useState(null);
	const [informationCollectionOn, setInformationCollectionOn] = useState(null);

	const checkError = () => {
		if (
			storageAccessOn === null ||
			personalizationOn === null ||
			useOfInformationOn === null ||
			informationCollectionOn === null
		) {
			setShowError(true);
			return true;
		}
		setShowError(false);
		return false;
	};

	const handleSave = () => {
		if (checkError()) {
			return;
		}

		onSave();
	};

	return (
		<div>
			<div className={styles.overlayContainerStyles} />

			<form className={styles.modalStyles}>
				<div className={styles.headerStyles}>
					<h1 className={styles.title}>Your privacy options</h1>
					<div className={styles.roundelContainerStyles}>
						<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
							<path fill="#FFFFFF" d="M18 0a18 18 0 1 0 0 36 18 18 0 0 0 0-36"></path>
							<path
								fill="#333333"
								d="M21.2 4.4c2.3.4 5.3 2 6.3 3.1v5.2H27L21.2 5v-.6zm-2.2.4c-4 0-6.3 5.6-6.3 13.2 0 7.7 2.2 13.3 6.3 13.3v.6c-6 .4-14.4-4.2-14-13.8A13.3 13.3 0 0 1 19 4v.7zm10.4 14.4l-1.9.9v8.6c-1 1-3.8 2.6-6.3 3.1V19.9l-2.2-.7v-.6h10.4v.6z"
							></path>
						</svg>
					</div>
				</div>
				<div className={styles.scrollableContainerStyles}>
					<div id="cmp-scrollable" tabIndex="-1" className={styles.scrollableAreaStyles}>
						<div className={styles.description}>
							<h2>Please review and manage your data and privacy settings below.</h2>
						</div>
						<ul className={styles.cmpListStyles}>
							<ListItem
								title="Information storage and access"
								value={storageAccessOn}
								onValueChange={value => {
									setStorageAccessOn(value);
									setShowError(false);
								}}
								error={showError}
							>
								<p>
									The storage of information, or access to information that is already stored, on your device such as
									advertising identifiers, device identifiers, cookies, and similar technologies.
								</p>
							</ListItem>
							<ListItem
								title="Personalisation"
								value={personalizationOn}
								onValueChange={value => {
									setPersonalizationOn(value);
									setShowError(false);
								}}
								error={showError}
							>
								<p>
									The collection and processing of information about your use of this service to subsequently
									personalise advertising and/or content for you in other contexts, such as on other websites or apps,
									over time. Typically, the content of the site or app is used to make inferences about your interests,
									which inform future selection of advertising and/or content.
								</p>
							</ListItem>
							<ListItem
								title="Use of information"
								value={useOfInformationOn}
								onValueChange={value => {
									setUseOfInformationOn(value);
									setShowError(false);
								}}
								error={showError}
							>
								<p>
									The collection of information, and combination with previously collected information, to select and
									deliver advertisements for you, and to measure the delivery and effectiveness of such advertisements.
									This includes using previously collected information about your interests to select ads, processing
									data about what advertisements were shown, how often they were shown, when and where they were shown,
									and whether you took any action related to the advertisement, including for example clicking an ad or
									making a purchase. This does not include personalisation, which is the collection and processing of
									information about your use of this service to subsequently personalise advertising and/or content for
									you in other contexts, such as websites or apps, over time.
								</p>
							</ListItem>
							<ListItem
								title="Information collection"
								value={informationCollectionOn}
								onValueChange={value => {
									setInformationCollectionOn(value);
									setShowError(false);
								}}
								error={showError}
							>
								<p>
									The collection of information, and combination with previously collected information, to select and
									deliver content for you, and to measure the delivery and effectiveness of such content. This includes
									using previously collected information about your interests to select content, processing data about
									what content was shown, how often or how long it was shown, when and where it was shown, and whether
									the you took any action related to the content, including for example clicking on content. This does
									not include personalisation, which is the collection and processing of information about your use of
									this service to subsequently personalise content and/or advertising for you in other contexts, such as
									websites or apps, over time.
								</p>
							</ListItem>
						</ul>
					</div>
				</div>
				{showError && (
					<div className={styles.error}>
						<p>Please set all privacy options to continue.</p>
					</div>
				)}
				<div className={styles.footerStyles}>
					<p>
						You can review your recission rights by clicking this{' '}
						<a data-link-name="first-pv-consent : to-link" href="https://www.theguardian.com/help/privacy-policy">
							link
						</a>
					</p>
					<div className={styles.modal}>
						<button className={styles.saveButton} type="button" onClick={handleSave}>
							Save and close
						</button>
						<button className={styles.cancelButton} type="button" onClick={onClose}>
							Cancel
						</button>
					</div>
				</div>{' '}
			</form>
		</div>
	);
};

PrivacyOption.propTypes = {
	onSave: PropTypes.func,
	onClose: PropTypes.func,
};

PrivacyOption.defaultProps = {
	onSave: () => {},
	onClose: () => {},
};

export default PrivacyOption;
