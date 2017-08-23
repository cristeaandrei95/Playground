import { Block } from "../../components/theme"
import style from "./style"


export default (
	<b>
		<Block size="1/2">
			<Block height="20vw">
				<b class={ style.block_demo }></b>
			</Block>
		</Block>
		<Block size="1/2">
			<Block height="10vw">
				<b class={ style.block_demo }></b>
			</Block>
			<Block height="10vw">
				<b class={ style.block_demo }></b>
			</Block>
		</Block>
		<Block height="10vw">
			<b class={ style.block_demo }></b>
		</Block>
	</b>
)
