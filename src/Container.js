import React from "react";
import { close, l, setCallback } from "./store";
import { motion, AnimatePresence } from "framer-motion"
import './popapka.scss';

const variantsOpacityAnimation = {
	initial: {
		opacity: 0,
	},
	enter: {
		opacity: 1,
	},
	exit: {
		opacity: 0,
	}
}

const variantsFromTopAnimation = {
	initial: {
		opacity: 0,
		marginTop: -50,
	},
	enter: {
		opacity: 1,
		marginTop: 0,
		transition: "easeIn"
	},
	exit: {
		opacity: 0,
		marginTop: -50,
		transition: "easeIn"
	}
}

const variantsBubAnimation = {
	initial: { opacity: 0, y: 50, scale: 0.3 },
	enter: { opacity: 1, y: 0, scale: 1 },
	exit: { opacity: 0, scale: 0.5, transition: { duration: 0.2 } }
}

class PopapkaContainer extends React.Component {
	state = {
		forceUpdateTrigger: false
	};

	componentDidMount() {
		setCallback(() => {
			this.setState({
				forceUpdateTrigger: !this.state.forceUpdateTrigger
			});
		});
	}

	close = (index) => {
		close(index)
	}

	getAnimationType = (animation) => {
		switch (animation) {
			case 'opacity':
				return variantsOpacityAnimation;
			case 'fromTop':
				return variantsFromTopAnimation;
			case 'bub':
				return variantsBubAnimation;
		
			default:
				return variantsOpacityAnimation;
		}
	}

	render() {
		return (
			<div id="popapka-container" {...this.props}>
				<AnimatePresence>
					{l.map((modal, modalIndex) => {
						return (
							<div key={modalIndex} className={modal?.settings?.className || "popapka"}>
								<motion.div
									className="dimmer"
									initial="exit"
									animate="enter"
									exit="exit"
									variants={variantsOpacityAnimation} />

								<motion.div
									className="popapka-animation"
									initial="exit"
									animate="enter"
									exit="exit"
									variants={this.getAnimationType(modal.animation)} >

									<div className="popup" onClick={() => this.close(modalIndex)}>
										<div className="content" onClick={(e) => e.stopPropagation()}>
											{ modal.close && (
												<div className={"close" + (modal.close === "outside" ? " outside" : "")} role="button" onClick={() => this.close(modalIndex)}>
													<svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><line fill="none" stroke="#fff" strokeWidth="1.1" x1="1" y1="1" x2="13" y2="13"></line><line fill="none" stroke="#fff" strokeWidth="1.1" x1="13" y1="1" x2="1" y2="13"></line></svg>
												</div>
											)}
											{ modal.title !== null && (
												<div className={"title" + (modal.close === "inside" ? " close-indent" : "")}>{modal.title}</div>
											)}
											<div className="body">{modal.content}</div>
											{ modal.positiveButton && (
												<div className="buttons">
													<button className="btn positive" onClick={() => modal.positiveButton()}>OK</button>
												</div>
												
											)}
										</div>
									</div>
								</motion.div>
							</div>
						);
					})}
				</AnimatePresence>
			</div>
		);
	}
}

export default PopapkaContainer;
