import styled from "styled-components"
import { Line } from 'react-chartjs-2';

const LineChart = () => {

    const data = {
        labels: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
        datasets: [
            {
                label: '',
                data: [0, 1.5, 2, 2.5, 1, 2.5, 1],
                fill: false,
                borderColor: "#000000",
                backgroundColor: "#000000",
                pointBackgroundColor: "#000000",
                pointBorderColor: "#000000",
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function (context) {

                        const { dataset, dataIndex } = context;
                        if (dataset.data) {
                            return dataset.data[dataIndex];
                        }
                    },
                    labelColor: function (context) {
                        return false;
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 1
                },
                grid: {
                    display: true
                }
            }
        },
        elements: {
            line: {
                tension: 0.5,
                backgroundColor: "#000000"
            }
        }
    };

    return (
        <ChartContainer className="flex row flex-wrap">
            <Line data={data} options={options} />
        </ChartContainer>
    )
}

const ChartContainer = styled.div`
    
    @media only screen and (max-width: 600px) {
        height: auto;
        width: 80vw;
    }
`;

export default LineChart
