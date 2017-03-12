// Step 1
// I used arrays with string for them but objects could be used as well. Might even be easier if they are.
var state = ['Ohio', 'Montana', 'Texas', 'Washington']
var lName = ['Bartley', 'Deforest', 'Fairview', 'Gray']
var events = ['anniversay', 'birthday', 'house warming', 'wedding']
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
// Ellen Fairview is Gregs cousin that had a wedding in Washington on Wednesday
if (lName[2] === 'Fairview' && state[3] === 'Washington' && events[3] === 'wedding' && relationships[0] === 'cousin' && day[0] === 'wednesday') {
  console.log('Ellen Fairview is Gregs cousin that had a wedding in Washington on Wednesday.')
}
if (lName[0] === 'Bartley' && state[0] === 'Ohio' && events[1] === 'birthday' && relationships[3] === 'sister' && day[1] === 'thursday') {
  console.log('Heather Bartley is Gregs sister who lives in Ohio and had a birthday on Thursday.')
}
if (lName[1] === 'Deforest' && state[2] === 'Texas' && events[2] === 'house warming' && relationships[2] === 'friend' && day[3] === 'saturday') {
  console.log('Rick DeForest is Gregs friend that had a house warming party in Texas on Saturday')
}
if (lName[3] === 'Gray' && state[1] === 'Montana' && events[0] === 'anniversay' && relationships[1] === 'father' && day[2] === 'friday') {
  console.log('Walter Gray is Gregs father who had an anniversary in Montana on Friday.')
}
