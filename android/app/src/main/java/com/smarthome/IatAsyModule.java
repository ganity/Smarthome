package com.smarthome;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.iflytek.cloud.SpeechUtility;

import java.util.Map;

public class IatAsyModule extends ReactContextBaseJavaModule {

  public IatAsyModule(ReactApplicationContext reactContext) {
    super(reactContext);
    SpeechUtility.createUtility(getReactApplicationContext(), "appid=54aa474a");
  }

  @Override
  public String getName() {
    return "IatAsyModule";
  }

  @ReactMethod
  public void start() {
    new IatDemo(getReactApplicationContext()).run();
  }

  @ReactMethod
  public void stop() {
    new IatDemo(getReactApplicationContext()).stop();
  }
}