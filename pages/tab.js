function getTabs() {
    return [
        {id: 0, label: 'foo'},
        {id: 1, label: 'bar'},
        {id: 2, label: 'hoge'}
    ];
}

const Tab = ({ tab }) => (
    <li onClick={tabClick}>{tab.label}</li>
    // <li onClick=(e => onClick(e, index))>{tab.label}</li>
)

const tabClick = () => console.log('clicked');

export default function TabContainer() {
    return (
        <ul>
            {getTabs().map(tab => 
                <Tab key={tab.id} tab={tab} />
            )}
        </ul>
    )
};