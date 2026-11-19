export function generateProfileAvatarByUserName(userName) {
  const AvatarNameGroup = userName.split(" ");
  const posictionLastName = AvatarNameGroup.length - 1;
  const One = AvatarNameGroup[0].charAt(0).toUpperCase();
  const Two = AvatarNameGroup[posictionLastName].charAt(0).toUpperCase();

  const avatar = `${One}${Two}`;
  return avatar;
}
