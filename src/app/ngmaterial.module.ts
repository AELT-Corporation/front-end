import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import {
//   MatCheckboxModule,
//   MatButtonModule,
//   MatFormFieldModule,
//   MatInputModule,
//   MatRippleModule,
//   MatCardModule,
// } from '@angular/material';
import * as MATERIAL_MODULES from '@angular/material';

export function mapMaterialModules() {
  return Object.keys(MATERIAL_MODULES).filter((k) => {
    const asset = MATERIAL_MODULES[k];
    return typeof asset === 'function'
      && asset.name.startsWith('Mat')
      && asset.name.includes('Module');
  }).map((k) => MATERIAL_MODULES[k]);
}
const modules = mapMaterialModules();

@NgModule({
  // imports: [ ],
  // exports: [
  //   BrowserAnimationsModule,
  //   NoopAnimationsModule,
  //   MatCheckboxModule,
  //   MatButtonModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatRippleModule,
  //   MatCardModule,
  // ]
  imports: modules,
  exports: modules
})
export class MaterialAppModule { }
