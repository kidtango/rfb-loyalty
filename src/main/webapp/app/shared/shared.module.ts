import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RfbloyaltySharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [RfbloyaltySharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [RfbloyaltySharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RfbloyaltySharedModule {
  static forRoot() {
    return {
      ngModule: RfbloyaltySharedModule
    };
  }
}
