const ProfileCard = ({ name, position, photoUrl, onClick, exec}) => {
    return (
        <div className="flex flex-col items-center pb-[20px] relative transform transition-transform duration-300 hover:scale-95 cursor-pointer" onClick={onClick}>
            <img src={photoUrl} alt={`${name}'s photo`} className={`${exec ? 'w-[398px] h-[561.89px]' : 'w-[288px] h-[416px]'} object-cover mb-4`} />
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="text-[#FFA523]">{position}</p>
        </div>
    );
};

export default ProfileCard;