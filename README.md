<div align="center">
  <a target="_blank" href="https://developers.contaazul.com/"><img src=".github/static/logo.png" alt="Mautic logo" height="109px"></a>
  <div><code>npm install mautic --save</code></div>
  <br>
  <p>
    Unofficial Node.js bindings to the Mautic REST API - <a target="_blank" href="https://developer.mautic.org/#rest-api">https://developer.mautic.org/#rest-api</a>
  </p>
  <p>

![Field Control ♥](https://img.shields.io/badge/Field%20Control-%20%20%20%20%20%20♥-blue.svg)

  </p>
  <p>
    Built with ❤︎ by 
      <a href="https://github.com/FieldControl">FieldControl</a> and
      <a href="https://github.com/FieldControl/mautic/graphs/contributors">contributors</a>
  </p>
</div>

---

## Installation

This client is intended for server side use only.

```
npm install mautic --save
```

<div align="center">
  <img height="20px" src=".github/static/separator.png"/>
</div>

## Playground

You can run and watch everything working fine at [bin/playground.js](https://github.com/FieldControl/mautic/blob/master/bin/playground.js) script

**Note**: You must enter your accessToken before running:

```
node bin/playground.js
```

<div align="center">
  <img height="20px" src=".github/static/separator.png"/>
</div>

## Usage

```js
const Mautic = require('mautic')
const client = new Mautic({
  username: 'luiz@gmail.com',
  password: 'shhhhhhhhhhhh<3~'
})
```

<div align="center">
  <img height="20px" src=".github/static/separator.png"/>
</div>


## Pull Requests

- **Add tests!** Your patch won't be accepted if it doesn't have tests.
- **Document any change in behaviour**. Make sure the README and any other
  relevant documentation are kept up-to-date.
- **Create topic branches**. Don't ask us to pull from your master branch.
- **One pull request per feature**. If you want to do more than one thing, send
  multiple pull requests.

<div align="center">
  <img height="20px" src=".github/static/separator.png"/>
</div>

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT) - see the [LICENSE](LICENSE) file for details.

<div align="center">
  <br/>
  <br/>
  <br/>
  <br/>
</div>

<div align="center">
  <p>
    <sub>
      Open source, from <a href="https://instagram.com/fieldcontrolapp" target="_blank">Field Control</a> with ❤
    </sub>
  </p> 
</div>