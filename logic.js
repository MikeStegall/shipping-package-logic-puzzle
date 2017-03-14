// Step 1
// I used arrays with string for them but objects could be used as well. Might even be easier if they are.
var fName = ['Ellen', 'Heather', 'Rick', 'Walter']
var state = ['Montana', 'Ohio', 'Texas', 'Washington']
var lName = ['Bartley', 'Deforest', 'Fairview', 'Gray']
var events = ['Anniversary', 'Birthday', 'House Warming', 'Wedding']
var relationship = ['Cousin', 'Father', 'Friend', 'Sister']
var day = ['Wednesday', 'Thursday', 'Friday', 'Saturday']
// Step 2
// Greg’s Friend wasn’t Ellen Fairview, who didn’t live in Ohio.
if (relationship !== 'Friend' && state !== 'Ohio') {
  // maybeHeather = true
}
// The Birthday girl didn’t have her party on Friday.
if (events === 'Birthday' && day !== 'Friday') {
  // maybeHeather = true
}
// Rick’s last name wasn’t Bartley but his event was on Saturday night.
if (lName !== 'Bartley' && day === 'Saturday') {
  // maybeRick = true
}
// Greg’s Father wasn’t getting married, but his last name was Gray.
if (relationship === 'Father' && lName === 'Gray') {
  // maybeWalter = true
}
// The Friend having a House Warming didn’t live in Ohio.
if (relationship === 'Friend' && state !== 'Ohio') {
  // maybeRick = true
}
// The Wedding was for Greg’s Cousin
if (relationship === 'Cousin' && events === 'Wedding') {
  // maybeEllen = true
}
// Heather, who didn’t live in Texas, was Greg’s Sister but her event wasn’t on Wednesday night.
if (state !== 'Texas' && relationship === 'Sister' && day !== 'Wednesday') {
  // maybeHeather = true
}
// Walter’s event was one day earlier than the person whose last name was DeForest but after the person who lived in Washington.
if (lName !== 'Deforest' && state !== 'Washington') {
  // maybeWalter = true
}
// The Anniversary was held in Montana.
if (events === 'Anniversary' && state === 'Montana') {
  // maybeEllen = true
}
// Step 3
// Ellen Fairview is Gregs Cousin that had a Wedding in Washington on Wednesday
// if (lName[2] === 'Fairview' && state[3] === 'Washington' && events[3] === 'Wedding' && relationship[0] === 'Cousin' && day[0] === 'Wednesday') {
//   console.log('Ellen Fairview is Gregs Cousin that had a Wedding in Washington on Wednesday.')
// }
// if (lName[0] === 'Bartley' && state[0] === 'Ohio' && events[1] === 'Birthday' && relationship[3] === 'Sister' && day[1] === 'Thursday') {
//   console.log('Heather Bartley is Gregs Sister who lives in Ohio and had a Birthday on Thursday.')
// }
// if (lName[1] === 'Deforest' && state[2] === 'Texas' && events[2] === 'House Warming' && relationship[2] === 'Friend' && day[3] === 'Saturday') {
//   console.log('Rick DeForest is Gregs Friend that had a House Warming party in Texas on Saturday')
// }
// if (lName[3] === 'Gray' && state[1] === 'Montana' && events[0] === 'Anniversary' && relationship[1] === 'Father' && day[2] === 'Friday') {
//   console.log('Walter Gray is Gregs Father who had an Anniversary in Montana on Friday.')
// }
// Print out all possible compinations
// var possibleComps = []
var person1 = []
var person2 = []
for (var i = 0; i < fName.length; i++) {
  for (var j = 0; j < lName.length; j++) {
    for (var k = 0; k < state.length; k++) {
      for (var l = 0; l < events.length; l++) {
        for (var m = 0; m < relationship.length; m++) {
          for (var n = 0; n < day.length; n++) {
            if (fName[i] === 'Ellen' && lName[j] === 'Fairview' && state[k] !== 'Ohio' && events[l] !== 'Birthday' && relationship[m] !== 'Friend' && day[n] !== 'Friday') {
              person1.push(fName[i] + ' ' + lName[j] + ' ' + state[k] + ' ' + events[l] + ' ' + relationship[m] + ' ' + day[n])
            } else if (fName[i] === 'Rick' && lName[j] !== 'Bartley' && lName[j] !== 'Fairview' && events[l] !== 'Birthday' && day[n] === 'Saturday') {
              person2.push(fName[i] + ' ' + lName[j] + ' ' + state[k] + ' ' + events[l] + ' ' + relationship[m] + ' ' + day[n])
            }
          }
        }
      }
    }
  }
}
console.log(person1)
console.log(person2)
// possibleComps.push(fName[i] + ' ' + lName[j] + ' ' + state[k] + ' ' + events[l] + ' ' + relationship[m] + ' ' + day[n])
