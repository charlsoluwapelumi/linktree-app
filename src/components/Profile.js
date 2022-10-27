import img from '../images/profileimg.png'

const Profile = () => {
  return (
    <div className='profile'>
        <img id='profile_img' src={img} alt="" />
        <h3 id='twitter'>Annette Black</h3>
        <h3 id='slack'>Charles Oluwapelumi Sanusi</h3>
    </div>
  )
}

export default Profile