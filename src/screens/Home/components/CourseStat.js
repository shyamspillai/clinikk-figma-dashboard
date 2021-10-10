import styled from 'styled-components'

const CourseStat = ({statNumber, statType, statStatus}) => {
    return (
        <StatComponent>
            <span className="baloo size-60 weight-600 font-black">{statNumber}</span>
            <div className="flex column">
                <span className="baloo size-16 weight-400 font-black">{statType}</span>
                <span className="baloo size-16 weight-400 font-black">{statStatus}</span>
            </div>
        </StatComponent>
    )
}

const StatComponent = styled.div`
    flex: 0.4;
    display: flex;
    flex-direction: row;
    background-color: #f5f5f7;
    justify-content: space-around;
    align-items: center;
    padding: 15px 15px;
    border-radius: 15px;

    @media only screen and (max-width: 400px) {
        flex: 0.45
    }
`;

export default CourseStat
