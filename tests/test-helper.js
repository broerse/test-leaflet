import Application from 'test-leaflet/app';
import config from 'test-leaflet/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
