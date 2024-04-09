import './profile.css'

export default function Profile() {

  const user = {
    firstName: "Candy",
    lastName: "Wang",
    description: "前端工程師",
    avatar: "https://i.pravatar.cc/300?img=31",
  };

  return (
    <div id="root">
      <div className="card">
        <img src={`${user.avatar}`} alt="頭貼"/>
        <div className="content">
          <h3><b>{`${user.firstName} ${user.lastName}`}</b></h3>
          <p>{user.description}</p>
          <p className="text-blue">會每天練習 React 1 次！ </p>
        </div>
      </div>
    </div>
  )
}
