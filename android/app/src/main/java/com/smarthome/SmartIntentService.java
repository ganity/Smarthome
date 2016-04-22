package com.smarthome;

import android.app.IntentService;
import android.content.Intent;

import com.facebook.react.LifecycleState;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

/**
 * Created by ganily on 2016/4/21.
 */
public class SmartIntentService extends IntentService{
    public final static String SOMETHING = "something";
    private ReactInstanceManager mReactInstanceManager;
    private ReactContext mContext;
    private WritableMap mParams;

    public SmartIntentService() {
        super("SmartIntentService");
        mReactInstanceManager = ReactInstanceManager.builder()
                .setApplication(App.application)
                .setBundleAssetName("index.android.bundle")
                .setJSMainModuleName("index.android")
                .addPackage(new MainReactPackage())
                .setUseDeveloperSupport(BuildConfig.DEBUG)
                .setInitialLifecycleState(LifecycleState.BEFORE_RESUME)
                .build();
        SoLoader.loadLibrary("reactnativejni");
        mReactInstanceManager.createReactContextInBackground();
        mReactInstanceManager.addReactInstanceEventListener(new ReactInstanceManager.ReactInstanceEventListener() {
            @Override
            public void onReactContextInitialized(ReactContext context) {
                mContext = context;
                if (mParams != null) {
                    mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                            .emit("FromService", mParams);
                    mParams = null;
                }
            }
        });
    }

    @Override
    protected void onHandleIntent(Intent workIntent) {
        String something = null;
        if (workIntent.hasExtra(SOMETHING)) {
            something = workIntent.getStringExtra(SOMETHING);
        }

        new Thread(new Runnable() {
            @Override
            public void run() {
                int count = 1;
                while (true) {
                    WritableMap params = Arguments.createMap();
                    params.putString(SOMETHING, " and message from service to JS " + count);
                    if (mContext != null) {
                        mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                                .emit("FromService", params);
                    } else {
                        mParams = params;
                    }

                    count++;
                    try {
                        Thread.sleep(20000);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            }
        }).start();

    }
}
