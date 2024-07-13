import {} from /*useNavigate*/ "react-router-dom";
import { H2, Icon } from "../../../../components";
// import { /*SpecialPanel*/ } from '../special-panel/special-panel';
import styled from "styled-components";
// import { PROP_TYPE } from '../../../../constants';

const ConfectionContentContainer = ({
	className,
	confection: { confectionId, name, confectionImage, description, price },
}) => {
	// const navigate = useNavigate();

	return (
		<div className={className}>
			<img src={confectionImage} alt={name} />
			<H2>{name}</H2>
			<div className="special-panel">
				<div>{price} + "⃀"</div>
				<div className={className}>
					<div className="buttons">
						{/* {editButton} */}
						<Icon
							id="fa-pencil-square-o"
							margin="0 15px 0 0 "
							// onClick={() => onPostRemove(confectionId)}
						/>
						<Icon
							id="fa-trash-o"
							// onClick={() => onPostRemove(confectionId)}
						/>
					</div>
				</div>
			</div>
			<div className="confection-text">{description}</div>
			{/* <div className="cofection-property">
				<div>Category: </div>
				<div>Weight: </div>
				<div>Box: </div>
			</div>

			<hr /> */}

			{/* <SpecialPanel
				id={confection_id}
				confection_image={confection_image}
				price={price}
				margin="-20px 0 20px"
				editButton={
					<Icon
						id="fa-pencil-square-o"
						size="21px"
						margin="0 10px 0 0"
						onClick={() => navigate(`/confection/${confection_id}/edit`)}
					/>
				}
			/> */}
			{/* <div className="confection-text">{description}</div> */}
		</div>
	);
};

export const ConfectionContent = styled(ConfectionContentContainer)`
	& img {
		float: left;
		margin: 0 50px 0px 0;
		height: 300px;
		width: 300px;
	}

	& .confection-text {
		font-size: 18px;
		white-space: pre-line;
	}
	& .buttons {
		display: flex;
	}

	& .cofection-property {
	}

	& .special-panel {
		display: flex;
		justify-content: space-between;
		font-size: 18px;
		margin: -20px 0 20px;
	}
`;

// ConfectionContent.propTypes = {
// 	post: PROP_TYPE.POST.isRequired,
// };
