import React from 'react';
import PropTypes from 'prop-types';

import styles from './PrivacyFooter.module.scss';

const PrivacyFooter = ({ onSave, onOption }) => {
	return (
		<div className={styles.bannerStyles}>
			<div className={styles.outerContainerStyles}>
				<div className={styles.roundelContainerStyles}>
					<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
						<path fill="#FFFFFF" d="M18 0a18 18 0 1 0 0 36 18 18 0 0 0 0-36"></path>
						<path
							fill="#333333"
							d="M21.2 4.4c2.3.4 5.3 2 6.3 3.1v5.2H27L21.2 5v-.6zm-2.2.4c-4 0-6.3 5.6-6.3 13.2 0 7.7 2.2 13.3 6.3 13.3v.6c-6 .4-14.4-4.2-14-13.8A13.3 13.3 0 0 1 19 4v.7zm10.4 14.4l-1.9.9v8.6c-1 1-3.8 2.6-6.3 3.1V19.9l-2.2-.7v-.6h10.4v.6z"
						></path>
					</svg>
				</div>

				<div className={styles.content}>
					<div>
						<h1 className={styles.title}>Your privacy</h1>
					</div>
					<div className={styles.mobileScrollable}>
						<p>We have updated our Terms of Use and our Privacy Policy.</p>
						<p>
							You can find out more by reviewing our{' '}
							<a
								data-link-name="first-pv-consent : to-term-of-user"
								href="https://www.theguardian.com/help/privacy-policy"
							>
								terms of use
							</a>{' '}
							and{' '}
							<a data-link-name="first-pv-consent : to-privacy-policy" href="https://www.theguardian.com/info/cookies">
								privacy policy
							</a>{' '}
							and manage your consent at any time by going to ‘Privacy settings’ at the bottom of any page.
						</p>
						<p>
							If you disagree with our terms or privacy policy, you may view the recission rights policy via the options
							setting.
						</p>
					</div>

					<div className={styles.buttonContainerStyles}>
						<button tabIndex="4" className={styles.okButton} type="button" onClick={onSave}>
							I'm OK with that
							<svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M6 14.775l-1 1 5 7h.475l14.3-14.8-1-.975-13.3 12.05L6 14.775z"
								></path>
							</svg>{' '}
						</button>
						<button tabIndex="5" className={styles.optionButton} type="button" onClick={onOption}>
							Options
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

PrivacyFooter.propTypes = {
	onSave: PropTypes.func,
	onOption: PropTypes.func,
};

PrivacyFooter.defaultProps = {
	onSave: () => {},
	onOption: () => {},
};

export default PrivacyFooter;
