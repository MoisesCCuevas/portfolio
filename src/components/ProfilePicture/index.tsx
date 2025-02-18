import * as React from 'react';

interface ProfilePicture {
  url: string;
  alt: string;
  className?: string;
  classNameChildren?: string;
}

const ProfilePicture = (props: ProfilePicture) => {
  const {
    className,
    classNameChildren,
    url,
    alt
  } = props;
  return (
    <figure className={`${className} rounded-full overflow-hidden shadow-md`}>
      <img src={url} alt={alt} className={classNameChildren} />
    </figure>
  );
};

ProfilePicture.defaultProps = {
  className: "size-11",
  classNameChildren: "object-cover",
  alt: "Profile Picture",
  url: "assets/pz_icon.png"
};

export default ProfilePicture;
