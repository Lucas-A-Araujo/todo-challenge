import { StyleSheet } from 'react-native'
import { theme } from '../../themes'

export const styles = StyleSheet.create({
	headerContainer: {
		backgroundColor: theme.colors.base.gray700,
		alignItems: 'center',
		justifyContent: 'center',

		width: '100%',
		height: 170,

		position: 'relative',
	},
	form: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',

		width: '100%',
		height: 54,
        bottom: -50 / 2,

		position: 'absolute',
	},
	input: {
        height: 54,
		width: '75%',
		padding: 16,
		borderRadius: 5,
		marginRight: 4,
		borderWidth: 1,

		backgroundColor: theme.colors.base.gray500,
		color: theme.colors.base.gray100,
		borderColor: theme.colors.base.gray700,

		fontSize: theme.font_size.md,
		fontFamily: theme.font_family.regular,
	},
	inputBorder: {
		borderColor: theme.colors.brand.purple,
	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 54,
		width: 54,
		borderRadius: 5,

		backgroundColor: theme.colors.brand.blue_dark,
	},
})