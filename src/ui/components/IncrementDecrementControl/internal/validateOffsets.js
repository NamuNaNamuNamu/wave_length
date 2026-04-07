export function validateOffsets(offsets) {
    /*
    offsets = {
        valueX: (required)
        valueY: (optional) (default: 0)
        leftButtonX: (required)
        leftButtonY: (optional) (default: 0)
        rightButtonX: (required)
        rightButtonY: (optional) (default: 0)
    }
    */

    if (
        offsets["valueX"] === undefined ||
        offsets["leftButtonX"] === undefined ||
        offsets["rightButtonX"] === undefined
    ) {
        throw Error("offsets に必要なキーが存在しません。");
    }

    return {
        valueX: offsets["valueX"],
        valueY: offsets["valueY"] ?? 0,
        leftButtonX: offsets["leftButtonX"],
        leftButtonY: offsets["leftButtonY"] ?? 0,
        rightButtonX: offsets["rightButtonX"],
        rightButtonY: offsets["rightButtonY"] ?? 0
    }
}