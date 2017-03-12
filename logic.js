// Step 1
// I used arrays with string for them but objects could be used as well. Might even be easier if they are.
var state = ['Ohio', 'Montana', 'Texas', 'Washington']
var lName = ['Bartley', 'Deforest', 'Fairview', 'Gray']
var events = ['aniversay', 'birthday', 'house warming', 'wedding']
var relationships = ['cousin', 'father', 'friend', 'sister']
var day = ['wednesday', 'thursday', 'friday', 'saturday']
// Step 2
// Greg’s friend wasn’t Ellen Fairview, who didn’t live in Ohio.
if (relationships !== 'friend' && state !== 'Ohio') {
  maybeHeather = true
}
// The birthday girl didn’t have her party on Friday.
if (events === 'birthday' && day !== 'friday') {
  maybeHeather = true
}
// Rick’s last name wasn’t Bartley but his event was on Saturday night.
if (lName !== 'Bartley' && day === 'saturday') {
  maybeRick = true
}
// Greg’s father wasn’t getting married, but his last name was Gray.
if (relationships === 'father' && lName === 'Gray') {
  maybeWalter = true
}
// The friend having a house warming didn’t live in Ohio.
if (relationships === 'friend' && state !== 'Ohio') {
  maybeRick = true
}
// The wedding was for Greg’s cousin
if (relationships === 'cousin' && events === 'wedding') {
  maybeEllen = true
}
// Heather, who didn’t live in Texas, was Greg’s sister but her event wasn’t on Wednesday night.
if (state !== 'Texas' && relationships === 'sister' && day !== 'wednesday') {
  maybeHeather = true
}
// Walter’s event was one day earlier than the person whose last name was DeForest but after the person who lived in Washington.
if (lName !== 'Deforest' && state !== 'Washington') {
  maybeWalter = true
}
// The anniversary was held in Montana.
if (events === 'anniversary' && state === 'Montana') {
  maybeEllen = true
}
// Step 3
