import { GameObject } from './interfaces';

export class CollisionDetection {
  static check(obj1, obj2) {
    if (this.horizontalCollision(obj1, obj2) && this.verticalPosition(obj1, obj2)) {
      return true;
    } else {
      return false;
    }
  }

  private static horizontalCollision(obj1: GameObject, obj2: GameObject) {
    const obj1RightSide = obj1.settings.posX + obj1.settings.width;
    const obj1LeftSide = obj1.settings.posX;
    const obj2RightSide = obj2.settings.posX + obj2.settings.width;
    const obj2LeftSide = obj2.settings.posX;

    if (leftSideCollision() || rightSideCollision()) {
      return true;
    } else {
      return false;
    }

    function leftSideCollision() {
      if ((obj1LeftSide >= obj2LeftSide && obj1LeftSide <= obj2RightSide)) {
        return true;
      } else {
        return false;
      }
    }

    function rightSideCollision() {
      if (obj1RightSide >= obj2LeftSide && obj1RightSide <= obj2RightSide) {
        return true;
      } else {
        return false;
      }
    }
  }

  private static verticalPosition(obj1: GameObject, obj2: GameObject) {
    if (checkTopSideCollision()) {
      return true;
    } else {
      return false;
    }

    function checkTopSideCollision() {
      return (obj1.settings.posY >= obj2.settings.posY && obj1.settings.posY <= obj2.settings.posY + obj2.settings.height);
    }
  }
}
