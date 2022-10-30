import img from '../images/profileimg.png'

const Profile = () => {
  return (
    <div className='profile'>
        <img id='profile__img' src={img} alt="" />
        <h3 id='twitter'>Annette Black</h3>
        <h3 id='slack'>snscharmie</h3>
    </div>
  )
}

export default Profile