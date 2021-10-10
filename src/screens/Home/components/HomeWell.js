import styled from 'styled-components'

const HomeWell = () => {
    return (
        <HomeWellComponent>
            <span className="baloo weight-600 size-60 font-black">Hello Josh!</span>
            <span className="roboto size-16 weight-400 font-black">It's good to see you again</span>
        </HomeWellComponent>
    )
}

const HomeWellComponent = styled.div`
    flex: 0.5;
    height: 160px;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
    background-color: #f5f5f7;
    border-radius: 15px;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 400px) {
        width: 300px !important;
        display: flex;
        margin-bottom: 30px;
    }
`

export default HomeWell
