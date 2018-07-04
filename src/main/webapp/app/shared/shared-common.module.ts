import { NgModule } from '@angular/core';

import { JhappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhappSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhappSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhappSharedCommonModule {}
