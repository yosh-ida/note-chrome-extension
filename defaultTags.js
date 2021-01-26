function insert_default_tags() {
    const input_body = document.getElementsByClassName('hashtag-recommend-group__body')[0];
    if (input_body == null)
        return;
    const tags = ['#日記', '#エッセイ', '#写真', '#毎日note', '#イラスト', '#小説', '#コラム', '#マンガ'];
    for (var i in tags) {
        var body = document.createElement('li')
        body.setAttribute('data-v-14fc9452', "")
        body.className = 'hashtag-recommend-group__item'
        var button = document.createElement('button')
        button.setAttribute('data-v-037895b5', "")
        button.setAttribute('data-v-14fc9452', "")
        button.className = 'hashtag'
        const tag = tags[i]
        button.onclick = function () {
            var tag_adder = document.getElementsByClassName("o-hashtagInput")[0];
            console.log(tag_adder.__vue__)
            tag_adder.__vue__.selectSuggestion(tag);
        };
        var atag = document.createElement('div')
        atag.setAttribute('data-v-037895b5', "")
        atag.className = 'a-tag a-tag__size_small'
        var label = document.createElement('div')
        label.setAttribute('data-v-037895b5', "")
        label.className = 'a-tag__label'
        label.innerText = tags[i];
        atag.appendChild(label)
        button.appendChild(atag)
        body.appendChild(button)
        input_body.appendChild(body);
    }
}

insert_default_tags()