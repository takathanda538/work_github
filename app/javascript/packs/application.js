// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "jquery"
import "packs/jquery.jpostal.js"
import "../stylesheets/application.css"
import "../stylesheets/skippr.css"
import "../stylesheets/style.css"
import "jquery.min"
import "skippr.min"
import "./practice.js"
const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

Rails.start()
Turbolinks.start()
ActiveStorage.start()


