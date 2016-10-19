let registeredCallbacks = {};

export const on = (channel, callback) => {
    registeredCallbacks[channel] = callback;
};

export const trigger = (channel, data) => {
    const callback = registeredCallbacks[channel];
    if (callback) {
        callback(data);
    }
};

export const removeCallback = (channel) => {
    registeredCallbacks[channel] = undefined;
};