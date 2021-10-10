import faker from 'faker'
import { 
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    GithubOutlined,
    GitlabOutlined,
    AmazonOutlined,
    LinkedinOutlined,
    DribbbleOutlined,
    RedditSquareFilled,
    WeiboCircleOutlined,
    ChromeOutlined,
    AlibabaOutlined,
    IeOutlined
} from '@ant-design/icons'

export const generateFakeCourses = (courseCount = 5) => {
    const courses = [];
    let courseTitles = [
        { title: "Learn Figma", icon: <FacebookOutlined /> },
        { title: "Learn Photoshop", icon: <InstagramOutlined /> },
        { title: "Learn Skating", icon: <TwitterOutlined /> },
        { title: "Learn Photography", icon: <GithubOutlined /> },
        { title: "Learn Painting", icon: <GitlabOutlined /> },
        { title: "Learn Spanish", icon: <AmazonOutlined /> },
        { title: "Learn Cooking", icon: <LinkedinOutlined /> },
        { title: "Learn Coding", icon: <DribbbleOutlined /> },
        { title: "Learn Javascript", icon: <RedditSquareFilled /> },
        { title: "Learn Python", icon: <WeiboCircleOutlined /> },
        { title: "Learn Travel Writing", icon: <ChromeOutlined /> },
        { title: "Learn Gardening", icon: <AlibabaOutlined /> },
        { title: "Learn Artifial Intelligence", icon: <IeOutlined /> }
    ]

    courseTitles = faker.helpers.shuffle(courseTitles);

    for (let i = 0; i < courseCount; i++) {

        courses.push(
            {
                "title" : courseTitles[i].title,
                "author" : faker.name.firstName() + ' ' + faker.name.lastName(),
                "time" : `${Math.floor(Math.random() * 7)}h ${Math.floor(Math.random() * 9)}min`,
                "rating" : (Math.random() * 10).toFixed(2),
                "icon": courseTitles[i].icon,
                "courseUrl" : "http://dummylink.doesntwork"
            }
        )
        
    }

    return courses;
}

export const getBrandIcon = () => {
    const BrandIcons = [
        <FacebookOutlined />,
        <InstagramOutlined />,
        <TwitterOutlined />,
        <GithubOutlined />,
        <GitlabOutlined />,
        <AmazonOutlined />,
        <LinkedinOutlined />,
        <DribbbleOutlined />,
        <RedditSquareFilled />,
        <WeiboCircleOutlined />,
        <ChromeOutlined />,
        <AlibabaOutlined />,
        <IeOutlined />
    ]

    return BrandIcons[Math.floor(Math.random() * BrandIcons.length)];
}