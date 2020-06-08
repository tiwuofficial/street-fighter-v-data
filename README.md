# street-fighter-v-data


```javascript
list = [];
isTokusyu = false;
type = "";
document.querySelector('.frameTbl[vtrigger="1"]').querySelectorAll('tr').forEach(tr=> {
try {
    const th = tr.querySelector('th');
    if (th && !th.classList.contains('headTtlSkill') && !th.classList.contains('sep3')) {
        if (th.textContent === 'Unique Attacks') {
            isTokusyu = true;
        } else {
            isTokusyu = false;
        }
    }

    if (tr.querySelector('.type')) {
        switch(tr.querySelector('.type').textContent) {
          case 'Normal Moves':
              type = 'normal';
              break;
          case 'Unique Attacks':
              type = 'unique';
              break;
          case 'Normal Throws':
              type = 'throw';
              break;
          case 'V-System ':
              type = 'vsystem';
              break;
          case 'Special Moves':
              type = 'special';
              break;
          case 'Critical Art':
              type = 'ca';
              break;
        }
    }

    tds = tr.querySelectorAll('td');
    obj = {};
    obj.name = tds[0].querySelector('.name').innerText;
    obj.outbreak = tds[1].textContent;
    obj.persistence = tds[2].textContent;
    obj.rigidity = tds[3].textContent;
    obj.hit = tds[4].textContent;
    obj.guard = tds[5].textContent;
    obj.damage = tds[9].querySelector('.damageAll').textContent;
    obj.stan = tds[10].querySelector('.stunAll').textContent;
    obj.remarks = tds[15].textContent.trim();
    if (type === "normal" && obj.rigidity === "") {
      obj.type = "jump";
    } else {
      obj.type = type;
    }

    let command ='';
    if (isTokusyu) {
        tds[0].childNodes.forEach(elm => {
          if (elm.textContent === '+') {
              command += ' +';
              return ;
          }

          if (elm.classList.contains('cmdPartsText')) {
              command += elm.textContent;
              return ;
          }

          if (elm.getAttribute('src')) {
              const url = new URL(elm.getAttribute('src'));
              switch(url.pathname.split("/").pop()) {
                  case 'next.gif':
                      command += ' ▶';
                      break;
                  case '1.gif':
                      command += ' ↙';
                      break;
                  case '2.gif':
                      command += ' ↓';
                      break;
                  case '3.gif':
                      command += ' ↘';
                      break;
                  case '4.gif':
                      command += ' ←';
                      break;
                  case '6.gif':
                      command += ' →';
                      break;
                  case '8.gif':
                      command += ' ↑';
                      break;
                  case '9.gif':
                      command += ' ↗';
                      break;
              }
          }

            if (elm.classList.contains('keyBlockFrm')) {
                command += ' ' + elm.querySelector('span').textContent;
                const url = new URL(elm.querySelector('img').getAttribute('src'));
                switch(url.pathname.split("/").pop()) {
                    case 'punch.gif':
                        command += 'P';
                        break;
                    case 'kick.gif':
                        command += 'K';
                        break;
                }
            }
        });
    }
    obj.command = command.trim();

    list.push(obj);
    } catch (e) {
        console.log(e);
    }
});
console.log(JSON.stringify(list));
```