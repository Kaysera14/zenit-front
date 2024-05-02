import PropTypes from "prop-types";

export function Main({ children }) {
	return <main className="">{children}</main>;
}

Main.propTypes = {
	children: PropTypes.node.isRequired,
};
