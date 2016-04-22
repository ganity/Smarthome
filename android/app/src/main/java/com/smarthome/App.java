package com.smarthome;

import android.app.Application;
import android.content.Context;

/**
 * Created by ganily on 2016/4/21.
 */
public class App extends Application {
    public static Context context;
    public static Application application;

    @Override public void onCreate() {
        super.onCreate();
        context = getApplicationContext();
        application = this;
    }
}
